var a = document.getElementsByClassName('Fw(b)')

for (let item of a)  { if(item.getAttribute('data-reactid') == 32 && item.tagName.toLowerCase() == 'span') {  console.log(item) } }
let me try

<div class="tv-trading-toolbar__value js-value">
<span>0.700</span>
<span class="i-down">
<span>
    3
<sup>9</sup>
</span>
</span>
</div>


var a = document.getElementsByClassName('tv-trading-toolbar__value js-value')

for (let item of a)  
{ 

     console.log(item.textContent) 
}

var a = document.getElementsByClassName('tv-trading-toolbar__button-title--sell')
var b = a.childNode
for (let item of a)  
{ 

     console.log(item.textContent) 
}


Sell Element
<div title="" class="tv-trading-toolbar__bs-button tv-trading-toolbar__bs-button--sell apply-common-tooltip"><div class="tv-trading-toolbar__button-title tv-trading-toolbar__button-title--sell">Sell</div><div class="tv-trading-toolbar__value js-value"><span>0.701</span><span class="i-down"><span>2<sup>9</sup></span></span></div></div>
Buy Element
<div title="" class="tv-trading-toolbar__bs-button tv-trading-toolbar__bs-button--buy apply-common-tooltip"><div class="tv-trading-toolbar__button-title tv-trading-toolbar__button-title--buy">Buy</div><div class="tv-trading-toolbar__value js-value"><span>0.701</span><span class="i-up"><span>5<sup>1</sup></span></span></div></div>