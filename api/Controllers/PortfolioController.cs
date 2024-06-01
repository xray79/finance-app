using api.Extensions;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PortfolioController: ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IStockRepository _stockRepository;
    private readonly IPortfolioRepository _portfolioRepo;

    public PortfolioController(
        UserManager<AppUser> userManager, 
        IStockRepository stockRepository,
        IPortfolioRepository portfolioRepo
        )
    {
        _userManager = userManager;
        _stockRepository = stockRepository;
        _portfolioRepo = portfolioRepo;
    }

    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetUserPortfolio()
    {
        var username = User.GetUsername();
        var appUser = await _userManager.FindByNameAsync(username);
        var userPortfolio = await _portfolioRepo.GetUserPortfolio(appUser);
        return Ok(userPortfolio);
    }

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> AddPortfolio(string symbol)
    {
        var username = User.GetUsername();
        var appUser = await _userManager.FindByNameAsync(username);
        var stock = await _stockRepository.GetBySymbolAsync(symbol);

        if (stock == null)
            return NotFound();

        var userPortfolio = await _portfolioRepo.GetUserPortfolio(appUser);

        if (userPortfolio.Any(e => e.Symbol.ToLower() == symbol.ToLower()))
            BadRequest("Cannot add same stock");

        var portfolioModel = new Portfolio
        {
            StockId = stock.Id,
            AppUserId = appUser.Id
        };

        await _portfolioRepo.CreateAsync(portfolioModel);

        if (portfolioModel == null)
        {
            return StatusCode(500, "could not create");
        }
        else
        {
            return Created();
        }
    }

    [HttpDelete]
    [Authorize]
    public async Task<IActionResult> DeletePortfolio(string symbol)
    {
        var username = User.GetUsername();
        var appUser = await _userManager.FindByNameAsync(username);

        var userPortfolio = await _portfolioRepo.GetUserPortfolio(appUser);
        var filteredStock = userPortfolio.Where(s => s.Symbol.ToLower() == symbol.ToLower());

        if (filteredStock.Count() == 1)
        {
            await _portfolioRepo.DeletePortfolio(appUser, symbol);
        }
        else
        {
            return BadRequest("Stock not in your portfolio");
        }

        return Ok();
    }
}