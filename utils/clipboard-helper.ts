export function writeText(str: string): Promise<void> {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return Promise.reject(new Error("Clipboard not available on server."));
  }

  return new Promise((resolve, reject) => {
    let success = false;

    function listener(e: ClipboardEvent) {
      e.clipboardData?.setData("text/plain", str);
      e.preventDefault();
      success = true;
    }

    document.addEventListener("copy", listener);

    const textArea = document.createElement("textarea");
    textArea.value = str;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const result = document.execCommand("copy");
      document.body.removeChild(textArea);
      document.removeEventListener("copy", listener);

      result && success ? resolve() : reject(new Error("Copy command failed"));
    } catch (err) {
      document.body.removeChild(textArea);
      document.removeEventListener("copy", listener);
      reject(err);
    }
  });
}
