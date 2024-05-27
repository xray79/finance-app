using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    public class CreateCommentDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Must be at least 5 chars")]
        [MaxLength(120, ErrorMessage = "Title cannot be over 120 characters")]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MinLength(5, ErrorMessage = "Must be at least 5 chars")]
        [MaxLength(120, ErrorMessage = "Title cannot be over 120 characters")]
        public string Content { get; set; } = string.Empty;
    }
}