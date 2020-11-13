/****** スライドショーの記述 ******/

// 画像を配列に代入
const pics_src = new Array("../img/test1.jpg","../img/test2.jpg","../img/test3.jpg","../img/test4.jpg","../img/test5.jpg","../img/test6.jpg","../img/test7.jpg");
const slideshow = document.getElementById('slideshow');

// 画像を自動で再生する記述
let count = 0;
const slideimage =()=>{
	if( count >= pics_src.length){
		count = 0;
	} else {
		slideshow.src = pics_src[count];
		count++;
		
	} 
	console.log('countのindex:' + count)
}

// 「開始/停止」ボタンを押したら動きが止まる記述
let slideid = 0;
const startstop = () =>{
	if(slideid === 0){//開始ボタンを押した時の処理内容
	slideid = setInterval(slideimage, 1000);
	}else{ //停止ボタンを押した時の処理内容
	clearInterval(slideid);
	slideid = 0;
	}
}
document.getElementById('startstopbtn').onclick = startstop;

// 画像を「次へ」「戻る」ボタンで再生する記述
const back = document.getElementById('go_back');
const forward = document.getElementById('go_forward');
let num  = 0;
forward.addEventListener('click',function(){
	if(num == 7) {
		num = 0;
	} else {
		num ++;
	}
	slideshow.src=pics_src[num];

})

back.addEventListener('click',function(){
	if (num == 0) {
		count = 6;
		console.log('numのindex:' + num)
	} else {
		num --;
		console.log('numのindex:' + num)
	}
	slideshow.src=pics_src[num]
})
