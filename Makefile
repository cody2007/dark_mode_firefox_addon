all:
	git diff --exit-code
	git diff --cached --exit-code
	cd .. && zip -FSr chrome.zip chrome -x '*.git*'
	sed -i 's/-webkit-full-screen/-moz-full-screen/g' style.css
	zip -FSr ../firefox-webextension.zip * -x '*.git*'
	git checkout style.css
