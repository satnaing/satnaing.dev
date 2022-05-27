import React from "react";
import { useTheme } from "next-themes";

export const useUtterances = (commentNodeId: string) => {
  const { theme } = useTheme();
  React.useEffect(() => {
    const scriptParentNode = document.getElementById(commentNodeId);
    if (!scriptParentNode) return;

    // docs - https://utteranc.es/
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "satnaing/my-portfolio");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "comment :speech_balloon:");
    script.setAttribute("theme", `github-${theme}`);
    script.setAttribute("crossorigin", "anonymous");

    scriptParentNode.appendChild(script);

    return () => {
      // cleanup - remove the older script with previous theme
      scriptParentNode.removeChild(scriptParentNode.firstChild as Node);
    };
  }, [commentNodeId, theme]);
};
