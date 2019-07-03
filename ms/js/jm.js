$(document).ready(function(){
	var tit1 = document.getElementById('tit1')
	var tit2 = document.getElementById('tit2')
	var tit3 = document.getElementById('tit3')
	var tit4 = document.getElementById('tit4')
	var tit5 = document.getElementById('tit5')
	var tit6 = document.getElementById('tit6')
	var tit7 = document.getElementById('tit7')
	var tit8 = document.getElementById('tit8')
	var tit9 = document.getElementById('tit9')
	var tit10 = document.getElementById('tit10')
	var tgj = document.getElementById('tgj')
	var tdl = document.getElementById('tdl')
	var gaoji = document.getElementById('maintopleft')
	var dingz =  document.getElementById('maintopright')
	var titlist = document.getElementsByClassName('tit')
	gaoji.addEventListener('click',function(){	
		tit2.style['filter'] = 'opacity(.3)'
		tit5.style['filter'] = 'opacity(.3)'
		tit6.style['filter'] = 'opacity(.3)'
		tit7.style['filter'] = 'opacity(.3)'
		tit9.style['filter'] = 'opacity(.3)'
		tgj.innerHTML =  '高级版'
		tdl.innerHTML = '（适合独立摄影师）'
		tit1.setAttribute('ga','1')
		tit3.setAttribute('ga','1')
		tit4.setAttribute('ga','1')
		tit8.setAttribute('ga','1')
		tit10.setAttribute('ga','1')
		tit2.setAttribute('ga','0')
		tit5.setAttribute('ga','0')
		tit6.setAttribute('ga','0')
		tit7.setAttribute('ga','0')
		tit9.setAttribute('ga','0')
		a=tit1.getAttribute('ga')
	},false)
	dingz.addEventListener('click',function(){	
		tit2.style['filter'] = 'opacity(1)'
		tit5.style['filter'] = 'opacity(1)'
		tit6.style['filter'] = 'opacity(1)'
		tit7.style['filter'] = 'opacity(1)'
		tit9.style['filter'] = 'opacity(1)'
		tgj.innerHTML =  '定制版'
		tdl.innerHTML ='（适合小型工作室）'
		for(var i = 0;i<titlist.length;i++){
			titlist[i].setAttribute('ga','2')
		}	
	},false)
	
	for(var ti = 0;ti<titlist.length;ti++){
		titlist[ti].addEventListener('click',function(){
			a = this.getAttribute('ga')
			if(a == '1' ){
				a =this.innerText
				$('#xians').css("display",'inherit')
				$('#xxx').text('高级-'+a+'\n'+'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容')
			}
			else if(a == '2'){
				a =this.innerText
				$('#xians').css("display",'inherit')
				$('#xxx').text('高级-'+a+'\n'+'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容')
			}
		},false)
	}
	var fh = document.getElementById('fanhui')
	fh.addEventListener('click',function(){
		console.log('1111')
		$('#xians').css("display",'none')
		
	},false)
})

