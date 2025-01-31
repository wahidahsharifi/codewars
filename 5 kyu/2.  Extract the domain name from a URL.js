/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" */

function domainName(url) {
   if (
      url.startsWith("http://www") ||
      url.startsWith("https://www") ||
      url.startsWith("www")
   ) {
      return url.slice(url.indexOf("www") + 4, url.length).split(".")[0];
      //url.slice(url.indexOf(".") + 1, url.lastIndexOf("."))
   }
   if (url.startsWith("http")) {
      return url.slice(url.indexOf("//") + 2, url.indexOf("."));
   } else {
      return url.slice(0, url.indexOf("."));
   }
}