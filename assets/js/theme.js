

let toggleTheme = (theme) => {
  if (theme == "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}


let setTheme = (theme) =>  {
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);

};


let initTheme = (theme) => {
  if (theme == null || theme == 'null') {
    const userPref = window.matchMedia;
    if (userPref && userPref('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
    }
  }
  
  setTheme(theme);
}


initTheme(localStorage.getItem("theme"));

