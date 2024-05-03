import { useTheme } from "@mui/material";
import "../styles/Tool.css";

interface ToolProps {
  tool: string;
}

const Tool = ({ tool }: ToolProps) => {
  const theme = useTheme();
  return <div className={"tool"}>{tool}</div>;
};

export default Tool;
