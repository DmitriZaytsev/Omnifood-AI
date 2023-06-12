class flexboxSupportView {

    fixFlexGap() {
        var flex = document.createElement("div");
        flex.style.display = "flex";
        flex.style.flexDirection = "column";
        flex.style.rowGap = "1px";
      
        flex.appendChild(document.createElement("div"));
        flex.appendChild(document.createElement("div"));
      
        document.body.appendChild(flex);
        var isSupported = flex.scrollHeight === 1;
        flex.parentNode.removeChild(flex);
      
        if (!isSupported) document.body.classList.add("no-flexbox-gap");
        //watch "queries.css" for find class "no-flexbox-gap"
      }
}

export default new flexboxSupportView;