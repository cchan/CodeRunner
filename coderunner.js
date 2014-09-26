$(function(){
  $(".code").each(function(){
    var wrap = this;
    var coderun = c.append("<div class='coderun'>");
    var code = $(this).;
    var lang = $(this).attr("code-lang");
    var block = $(this).css("display") == "block";
    switch(lang.toLowerCase()){
      case "html":
        coderun.append($("<div />",{
          html: code
        }));
        break;
      case "css":
        coderun.append($("<style />", {
          html: code,
          scoped: "scoped"
        }));
        break;
      case "js":
        coderun.append($("<script />", {
          html: "" + code + ""
        }));
        break;
    }
  };)
});

//..............should use iframes
