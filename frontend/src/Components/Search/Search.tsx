import { ChangeEvent, SyntheticEvent } from "react"

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onSearchSubmit, search, onSearchChange }: Props): JSX.Element => {

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={onSearchChange} />
      </form>
    </>
  )
}
export default Search