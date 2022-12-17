let scrollTop = 0;
const nav = document.getElementById("main-nav");
window.addEventListener("scroll", () => {
	let scrollTopState = window.pageYOffset || document.documentElement.scrollTop;
	if(scrollTopState > scrollTop) {
		nav.style.top="-80px";
	} else {
		nav.style.top="0";
	}
	scrollTop = scrollTopState
})