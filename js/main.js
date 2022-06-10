var ca = document.getElementById('contentArea');

// start at home 
menuHome();

/** Function farm **/

function showCollapseMenu() {
	// console.log("Toggle Shown");
	let menuContainer = document.getElementById('navbarSupportedContent');
	menuContainer.classList.toggle("show");
	menuContainer.classList.toggle("collapse");
	console.log("Toggling");

	// toggle main brand icon
	let brandButton = document.getElementById('navbar-brand');
	brandButton.classList.toggle('hidden');
}

function menuDefault() {
	let menuHome = document.getElementById('menuHome');
	let menuWallet = document.getElementById('menuWallet');
	let menuTransact = document.getElementById('menuTransact');
	let menuHistory = document.getElementById('menuHistory');

	menuHome.parentElement.className = '';
	menuWallet.parentElement.className = '';
	menuTransact.parentElement.className = '';
	menuHistory.parentElement.className = '';

	menuHome.src="img/Home.png";
	menuWallet.src="img/Wallet.png";
	menuTransact.src="img/Transact.png";
	menuHistory.src="img/History.png";

}

function menuHome() {

	// reset other menu active elements and icons -> function
	menuDefault();

	let menuHome = document.getElementById('menuHome');
	if(menuHome.parentElement.classList.contains("active")){
		menuHome.src="img/Home.png";
	} else {
		menuHome.src="img/Home-active.png";					//enable color img
	}
						
	menuHome.parentElement.classList.toggle("active");		// set css label to handle font color

	// do some navigation
	home();
}

function menuWallet() {

	// reset other menu active elements and icons -> function
	menuDefault();

	let menuWallet = document.getElementById('menuWallet');
	if(menuWallet.parentElement.classList.contains("active")){
		menuWallet.src="img/Wallet.png";
	} else {
		menuWallet.src="img/Wallet-active.png";					//enable color img
	}
						
	menuWallet.parentElement.classList.toggle("active");		// set css label to handle font color

	// do some navigation
	wallet();
}

function menuTransact() {

	// reset other menu active elements and icons -> function
	menuDefault();

	let menuTransact = document.getElementById('menuTransact');
	if(menuTransact.parentElement.classList.contains("active")){
		menuTransact.src="img/Transact.png";
	} else {
		menuTransact.src="img/Transact-active.png";					//enable color img
	}
						
	menuTransact.parentElement.classList.toggle("active");		// set css label to handle font color

	// do some navigation
	transact();
}

function menuHistory() {

	// reset other menu active elements and icons -> function
	menuDefault();

	let menuHistory = document.getElementById('menuHistory');
	if(menuHistory.parentElement.classList.contains("active")){
		menuHistory.src="img/History.png";
	} else {
		menuHistory.src="img/History-active.png";					//enable color img
	}
						
	menuHistory.parentElement.classList.toggle("active");		// set css label to handle font color

	// do some navigation
	history();
}

//** Page Content can go here **/

/************************************ Home Page ****************************/
function home() {

	ca.innerHTML = "";

	let pageContent = "<div><a class='btn btn-light btn-sm float-end'><span class='oi oi-bell'></span></a></div>";

	pageContent += "<div class='topRow'><a id='balBtn' class='btn btn-light btn-sm' onclick='balToggle()'>Balance</a> <img src='img/eyeCon.png' /></div>";
	pageContent += "<div class='row'><div class='col mainBal'><h2>$4120.01</h2></div><div class='col assetBal'><h4><small>Assets Value ($)</small><br>$2500.03</h4></div></div>";
	pageContent += "<div class='row buttonRow'><div class='col'>";
	pageContent += iconButton('img/Union.png', 'My Card', 'myCard()');
	pageContent += "</div><div class='col'>";
	pageContent += iconButton('img/Rewards.png', 'Rewards', 'myRewards()'); 
	pageContent += "</div></div>";

	// <a href='#' class='btn btn-light'><img src='img/card-btn.png' /></a>
	// <a href='#' class='btn btn-light'><img src='img/rewards-btn.png' /></a>

	pageContent += "<div class='row'><div class='col'><div class='img-container'>";
	pageContent += "<h3 class='news-header'>DAO News &amp; Events <span class='float-end'><a class='news-link' href='#' onclick='news()'>See all</a></span></h3>";

	pageContent += buildNewsExcerpt("New payment project BanklessCC set to take the payments world by storm","Projects","12 hrs ago","newsSample1.png");
	pageContent += buildNewsExcerpt("New payment project BanklessCC set to take the payments world by storm","Projects","12 hrs ago","newsSample1.png");
	pageContent += buildNewsExcerpt("BANK token hits new ATH. What does this mean for hourly rates?","Tokenomics","08 hrs ago","newsSample2.png");
	pageContent += buildNewsExcerpt("GSE Elections start today. Read submission here...","Coindesk","2 hrs ago","newsSample3.png");

	// pageContent += "<img src='img/news-mock.png' />";
	pageContent += "</div></div></div>";
	

	ca.innerHTML += pageContent;

	return true;
}

	function balToggle() {
		let mainBal = document.getElementsByClassName('col mainBal');

		console.log(mainBal[0]);

		// mainBal.style.display = 'block';
		
		if (mainBal[0].style.display === "inline-block") {
	    mainBal[0].style.display = "block";
	    mainBal[0].innerHTML="<h2>$4120.01</h2>";
	  } else {
	  	mainBal[0].innerHTML="<h2>$****.**</h2>";
	    mainBal[0].style.display = "inline-block";
	  }
		
	}

	// UI Elements 
	function iconButton(img, text, url) {

		// url is a js function to call
		
		let thisBtn = "<a href='#' onclick='"+url+"' class='btn btn-light iconBtn'>\
									<img src='"+img+"' />\
									<p>"+text+"</p></a>";

		return thisBtn;

	}

/************************************ Wallet Page ****************************/

function wallet() {

	ca.innerHTML = "";

	let pageContent = "<div><a class='btn btn-light btn-sm float-end'><span class='oi oi-graph'></span></a></div>";

	pageContent += '<ul class="nav nav-tabs nav-justified" id="walletTab" role="tablist">\
		  <li class="nav-item">\
		    <a class="nav-link active" id="wallet-tab" data-toggle="tab" href="#walletC" role="tab" aria-controls="fiat" aria-selected="true" title="Tokens available in self-custody wallet.">Wallet</a>\
		  </li>\
		  <li class="nav-item">\
		    <a class="nav-link" id="vault-tab" data-toggle="tab" href="#vaultC" role="tab" aria-controls="crypto" aria-selected="false" title="Staked tokens, earning in the Funds Custody BANK Vault.">Vault</a>\
		  </li>\
		</ul>';

	// let fiatSub = '<div class="alert alert-danger" role="alert">\
	// 	  Choose a Funding Option + \
	// 	</div>';

	// let dataSub = '<div class="alert alert-dark" role="alert">\
	// 	  This is a dark alert—check it out!\
	// 	</div>';


	/** content for wallet tab - page  **/	 
	let walletPageContent = "<div style=clear:both></div><div id='main-balance'><img src='img/usd-badge.png' class='float-start' alt='balance in USD' /><h2 class='float-end'>$4120.01</h2>";
	// pageContent += "<div class='row'><div class='col'><a href='#' class='btn btn-light'><img src='img/card-btn.png' /></a></div><div class='col'><div class='col'><a href='#' class='btn btn-light'><img src='img/rewards-btn.png' /></a></div></div>";
	walletPageContent += "<div style=clear:both></div><p class='float-end'><small> ~ $4120.01</small></p></div>";

	
	walletPageContent += "<div id='tokenList' class='img-container'>";

	for(let x=0;x<2;x++) {
		walletPageContent += sampleTokens();		// show three sample tokens on a loop
	}

	walletPageContent += "</div>";


	/** content for vault tab - page  **/
	let vaultPageContent = "<div style=clear:both></div><div id='vault-balance'><img src='img/usd-badge.png' class='float-start' alt='vault balance in USD' /><h2 class='float-end'>$4500.00</h2>";
	// pageContent += "<div class='row'><div class='col'><a href='#' class='btn btn-light'><img src='img/card-btn.png' /></a></div><div class='col'><div class='col'><a href='#' class='btn btn-light'><img src='img/rewards-btn.png' /></a></div></div>";
	vaultPageContent += "<div style=clear:both></div><p class='float-end'><small> ~ $4500.00</small></p></div>";
	vaultPageContent += "<div id='tokenList' class='img-container'>";

	for(let x=0;x<1;x++) {
		vaultPageContent += vaultSample();		// show three sample tokens on a loop
	}

	vaultPageContent += "</div>";

	pageContent += '<div class="tab-content" id="walletTabContent">\
	  <div class="tab-pane fade show active" id="walletC" role="tabpanel" aria-labelledby="wallet-tab">'+walletPageContent+'</div>\
	  <div class="tab-pane fade" id="vaultC" role="tabpanel" aria-labelledby="vault-tab">'+vaultPageContent+'</div>\
	</div>';

	ca.innerHTML += pageContent;		// output content to page

	//enable clickable DOM
	$('#walletTab a').on('click', function (e) {
	  e.preventDefault()
	  handleTabClick( $(this), '#walletTab');
	});

}

	function sampleTokens() {

		let st = thisCoinBalance('img/daoToken.png', 'Bankless DAO', 'BANK', 35000) + thisCoinBalance('img/ethToken.png', 'Ethereum', 'ETH', 2.34) + thisCoinBalance('img/bscToken.png', 'Binance', 'BSC', 2000);

		return st;
	}

	function vaultSample() {

		let st = thisCoinBalance('img/usdcToken.jpeg', 'USD Circle', 'USDC', 2200) + thisCoinBalance('img/feiToken.png', 'Fei Protocol', 'FEI', 1400) + 
			thisCoinBalance('img/fraxToken.png', 'Frax Finance', 'FRAX', 600) +
			thisCoinBalance('img/daiToken.jpeg', 'Maker DAI', 'DAI', 300) +
			thisCoinBalance('img/ustToken.jpeg', 'Terra UST (Wormhole)', 'UST', 0);

		return st;
	}

	function thisCoinBalance(img, coinName, coinSymbol, coinBalance) {

		let dispBalance = Intl.NumberFormat().format(coinBalance);

		let thisCoinLine = "<div class='tokenContainer'><a href='#' onclick=coinPage('"+coinSymbol+"')><div class='float-start'><img src='";
		thisCoinLine += img;
		thisCoinLine += "' alt='balance in "+coinSymbol+"' class='coinImage' /></div><div class='float-start middle'>";
		thisCoinLine += "<p>"+coinName+"<p><p><small>"+coinSymbol+"</small></p>";		// token data
		thisCoinLine += "</div><div class='float-end'>";
		thisCoinLine += "<p>"+dispBalance+"</p><p><small>$1234.56</small></p></div></a></div>";		// amount data

		return thisCoinLine;
	}

/************************************ Transact Page ****************************/
function transact() {

	ca.innerHTML = "";

	let pageContent = '<ul class="nav nav-tabs nav-justified" id="transactTab" role="tablist">\
		  <li class="nav-item">\
		    <a class="nav-link active" id="fiat-tab" data-toggle="tab" href="#fiat" role="tab" aria-controls="fiat" aria-selected="true">Cash</a>\
		  </li>\
		  <li class="nav-item">\
		    <a class="nav-link" id="crypto-tab" data-toggle="tab" href="#crypto" role="tab" aria-controls="crypto" aria-selected="false">Crypto</a>\
		  </li>\
		</ul>';

	let fiatSub = '<div class="alert alert-danger" role="alert">\
		  Choose a Funding Option + \
		</div>';

	let dataSub = '<div class="alert alert-dark" role="alert">\
		  This is a dark alert—check it out!\
		</div>';

	pageContent += '<div class="tab-content" id="transactTabContent">\
		  <div class="tab-pane fade show active" id="fiat" role="tabpanel" aria-labelledby="fiat-tab">'+fiatSub+dataSub+'</div>\
		  <div class="tab-pane fade" id="crypto" role="tabpanel" aria-labelledby="crypto-tab">...</div>\
		</div>';

	// ca.innerHTML = "Transact";
	ca.innerHTML += pageContent;

	//enable clickable DOM
	//enable clickable DOM
	$('#transactTab a').on('click', function (e) {
	  e.preventDefault()
	  handleTabClick( $(this), '#transactTab');
	});

}

/************************************ History Page ****************************/
function history() {

	ca.innerHTML = "";

	let pageContent = '<ul class="nav nav-tabs nav-justified" id="historyTab" role="tablist">\
			<li class="nav-item">\
			    <a class="nav-link" id="fiat-tab" data-toggle="tab" href="#fiat" role="tab" aria-controls="fiat" aria-selected="false" >Cash</a>\
			</li>\
		  	<li class="nav-item">\
			    <a class="nav-link active" id="crypto-tab" data-toggle="tab" href="#crypto" role="tab" aria-controls="crypto" aria-selected="true" >Crypto</a>\
			</li>\
			</ul>';

	// let pageContent = '<ul class="nav nav-tabs nav-justified" id="transactTab" role="tablist">\
	// 	  <li class="nav-item">\
	// 	    <a class="nav-link" id="fiat-tab" data-toggle="tab" href="#fiat" role="tab" aria-controls="fiat" aria-selected="true">Fiat</a>\
	// 	  </li>\
	// 	  <li class="nav-item">\
	// 	    <a class="nav-link" id="crypto-tab" data-toggle="tab" href="#crypto" role="tab" aria-controls="crypto" aria-selected="false">Crypto</a>\
	// 	  </li>\
	// 	</ul>';

	let fiatSub = '<div class="alert alert-danger" role="alert">\
		  Choose a Funding Option + \
		</div>';

	let dataSub = '<div class="alert alert-dark" role="alert">\
		  This is a dark alert—check it out!\
		</div>';

	let cryptoSub = "";

	cryptoSub += "<div class='img-container historyList'>"
	cryptoSub += thisHistoryLine('img/moneyIn.png', 'Bankless CC', '28/05/2022 02:00 AM', '+ $432.00', 'USD');
	cryptoSub += thisHistoryLine('img/moneyOut.png', 'Bankless CC', '28/05/2022 02:00 AM', '- $432.00', 'USD');
	cryptoSub += thisHistoryLine('img/moneyIn.png', 'ETH Received', '28/05/2022 02:00 AM', '+ 1.23 ETH', 'ETH');
	cryptoSub += "</div>";

	cryptoSub += "<a href='#' class='img-container'><img src='img/history-mock.png' /></a>";


	pageContent += '<div class="tab-content" id="historyTabContent">\
		  <div class="tab-pane fade" id="fiat" role="tabpanel" aria-labelledby="fiat-tab">'+fiatSub+dataSub+'</div>\
		  <div class="tab-pane fade show active" id="crypto" role="tabpanel" aria-labelledby="crypto-tab">'+cryptoSub+'</div>\
		</div>';

	// ca.innerHTML = "History";
	ca.innerHTML += pageContent;

	//enable clickable DOM
	$('#historyTab a').on('click', function (e) {
		// console.log(e);
	  e.preventDefault()
	  handleTabClick( $(this), '#historyTab');
	});

	// ca.innerHTML += qna();
}

	function handleTabClick(this_clicked, targetSource) {

		console.log(this_clicked, targetSource);

		// handle menu elements
		$(targetSource + " a").each(function(index) {
			$(this).removeClass('active');
		});
		this_clicked.addClass("active");

		// show/hide the content
		$(targetSource + "Content div").each(function(index) {
			$(this).removeClass('show active');
		});
		// console.log( this_clicked.attr('href') );
		let thisTarget = this_clicked.attr('href');
		$(thisTarget).addClass('show active');

	}

	function thisHistoryLine(img, text, datetime, balance, coinSymbol) {

		// let dispBalance = Intl.NumberFormat().format(coinBalance);

		let thisHistoryLine = "<div class='historyContainer'><a href='#' onclick=historyDetail(3)><div class='float-start'><img src='";
		thisHistoryLine += img;
		thisHistoryLine += "' alt='balance in/out "+coinSymbol+"' class='coinImage' /></div><div class='float-start middle'>";
		thisHistoryLine += "<p>"+text+"</p><p><small>"+datetime+"</small></p>";		// token data
		thisHistoryLine += "</div><div class='float-end'>";
		thisHistoryLine += "<p>"+balance+"</p><p><small style='display:none'>$1234.56</small></p></div></a></div>";		// amount data

		return thisHistoryLine;
	}

	function qna() {
		let qnaOutput = '<!-- react area here -->\
	            <div id="like_button_container"></div>\
	            <p>The above Like Button is a React component</p>\
	            <hr>\
	            <ul>\
	              <li>I think that I would like to use this system frequently.</li>\
	              <li>I found the system unnecessarily complex.</li>\
	              <li>I thought the system was easy to use.</li>\
	              <li>I think that I would need the support of a technical person to be able to use this system.</li>\
	              <li>I found the various functions in this system were well integrated.</li>\
	              <li>I thought there was too much inconsistency in this system.</li>\
	              <li>I would imagine that most people would learn to use this system very quickly.</li>\
	              <li>I found the system very cumbersome to use.</li>\
	              <li>I felt very confident using the system.</li>\
	              <li>I needed to learn a lot of things before I could get going with this system.</li>\
	            </ul>\
	            <!-- first component to build is TESTING form -->\
	            <form>\
	              <div class="form-check form-check-inline">\
	                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">\
	                <label class="form-check-label" for="inlineRadio1">1</label>\
	              </div>\
	              <div class="form-check form-check-inline">\
	                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">\
	                <label class="form-check-label" for="inlineRadio2">2</label>\
	              </div>\
	              <div class="form-check form-check-inline">\
	                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">\
	                <label class="form-check-label" for="inlineRadio3">3</label>\
	              </div>\
	              <div class="form-check form-check-inline">\
	                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">\
	                <label class="form-check-label" for="inlineRadio2">4</label>\
	              </div>\
	              <div class="form-check form-check-inline">\
	                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>\
	                <label class="form-check-label" for="inlineRadio3">5 (disabled)</label>\
	              </div>\
	            </form>';

	    return qnaOutput;
	}


/************************************ Sub Page Links ****************************/

function myCard(){


	let backBtn = "<a class='btn btn-light' href='#' onclick='menuHome()'>< BACK</a>";
	let myCardPage = backBtn + "<h2>MY CARD PAGE</h2>";

	ca.innerHTML = myCardPage;

	return true;

}

function myRewards(){

	let backBtn = "<a class='btn btn-light' href='#' onclick='menuHome()'>< BACK</a>";
	let myRewardsPage = backBtn + "<h2>MY REWARDS PAGE</h2>";

	ca.innerHTML = myRewardsPage;

	return true;


}

function news() {
	// go to news page

	ca.innerHTML = "";		// reset page

	ca.innerHTML += buildNewsExcerpt("headline","cat","time","img");

	ca.innerHTML += "NEWS";
}

	function buildNewsExcerpt(headline,cat,time,img) {
		// pass four strings

		let thisNewsBuild = "<div class='news-excerpt'>";

		thisNewsBuild += "<div class='text-container'><h2><a href='#' onclick='newsStory(3)'>"+headline+"</a></h2><p>"+cat+"</p><p>"+time+"</p></div><a href='#' onclick='newsStory(3)'><img style='float-end' src='img/"+img+"' alt='news-image' /></a>";

		thisNewsBuild += "<div style='clear:both'></div><hr></div>";

		return thisNewsBuild;

	}

/******************************** Input specfic Pages ****************************/
function coinPage(symbol) {

	// use symbol to get user balance etc

	console.log(symbol, "from coinPage");
	let img = 'img/daoToken.png';
	let coinName = 'Bankless DAO';
	let dispBalance = '35,000';

	let thisCoinPage = "<a class='btn btn-light' href='#' onclick='menuWallet()'>< BACK</a>";
	thisCoinPage += symbol + " DETAIL SAMPLE PAGE";

	

	thisCoinPage += "<div><img src='";
	thisCoinPage += img;
	thisCoinPage += "' alt='balance in "+symbol+"' class='coinImage float-start' />";
	thisCoinPage += "<p>"+coinName+" <small> "+symbol+"</small></p></div>";		// token data
	thisCoinPage += "<p style='text-align:center;'><img src='https://via.placeholder.com/350?text=Chart+And+Personal+Token+History' /></p>";

	thisCoinPage += "<div class='float-end'>";
	thisCoinPage += "<p>"+dispBalance+"</p><p><small>$1234.56</small></p></div></a></div>";


	ca.innerHTML = thisCoinPage;

	return true;
}

function historyDetail(id) {

	// take id and return transaction details
	let img = 'img/moneyIn.png';
	let coinSymbol = 'USD';
	let text = 'Bankless CC';
	let datetime = '28/05/2022 02:00 AM';
	let balance = '+ $432.00';

	let thisHistoryPage = "<a class='btn btn-light' href='#' onclick='menuHistory()'>< BACK</a>";
	thisHistoryPage += id + " TRANSACTION DETAIL SAMPLE PAGE";

	// thisHistoryPage += "<hr>";

	thisHistoryPage += "<div><img src='";
	thisHistoryPage += img;
	thisHistoryPage += "' alt='balance in/out "+coinSymbol+"' class='txImage' /></div><hr><div class='float-start'>";
	thisHistoryPage += "<p>"+text+"</p><p><small>"+datetime+"</small></p>";		// token data
	thisHistoryPage += "</div><div class='float-end'>";
	thisHistoryPage += "<p>"+balance+"</p><p><small style=''>$1234.56</small></p></div></a></div>";		// amount data

	ca.innerHTML = thisHistoryPage;		// output

	return true;
}

function newsStory(id) {
	ca.innerHTML = "";

	let headline = "GSE Elections start today. Read submission here...";
	let cat = "Coindesk";
	let time = "2 hrs ago";
	let img = "newsSample3.png";

	let thisNewsStory = "<a class='btn btn-light' href='#' onclick='menuHome()'>< BACK</a>";
	thisNewsStory += id + " NEWS DETAIL SAMPLE PAGE";

	thisNewsStory += "<div><img src='img/";
	thisNewsStory += img;
	thisNewsStory += "' alt='news image' class='' /></div><hr><div class=''>";
	thisNewsStory += "<h2>"+headline+"</h2><p><small>in "+cat+ " at "+time+"</small></p>";
	thisNewsStory += "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>";		// amount data

	ca.innerHTML = thisNewsStory;		// output
}