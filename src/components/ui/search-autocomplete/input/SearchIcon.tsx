import { Search } from "@mui/icons-material";
import { SearchIconWrapper } from ".";

export interface SearchIconProps {
	icon?: React.ReactNode;
	color?: string;
}

export const SearchIcon = ({ icon: Icon, color }: SearchIconProps) => {
	return (
		<SearchIconWrapper>
			{Icon ? Icon : <Search sx={{ color: color || "#B784A3" }} />}
		</SearchIconWrapper>
	);
};
