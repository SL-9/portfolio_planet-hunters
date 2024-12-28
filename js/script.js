$(function () {
	var loading = $("#js-loading");

	//ページの読み込みが完了後にアニメーションを非表示・MVの高さを調整
	$(window).on("load", function () {
		var windowHeight = $(window).height();
		$(".mv").height(windowHeight);
		loading.delay("1000").fadeOut("2000");
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function () {
		loading.fadeOut("3000");
	}, 8000);

	//画面リサイズ時にMVの高さを調整
	$(window).resize(function () {
		var windowHeight = $(window).height();
		$(".mv").height(windowHeight);
	});

	//オーディオの再生と停止
	var audio = $("#js-audio").get(0);
	var isPlaying = false;
	audio.volume = 0.5;

	$("#js-audio-play").click(function () {
		if (isPlaying) {
			audio.pause();
			$(".audioSwitch").removeClass("on");
			$(".audioSwitch-text").html("SOUND OFF");
		} else {
			audio.play();
			$(".audioSwitch").addClass("on");
			$(".audioSwitch-text").html("SOUND ON");
		}
	});
	audio.onplaying = function () {
		isPlaying = true;
	};
	audio.onpause = function () {
		isPlaying = false;
	};
});

// const music = document.querySelector
// 	("#music");
// const play = document.querySelector
// 	("#play");
// const pause = document.querySelector
// 	("#pause");

// play.addEventListener("click", () => {
// 	// 音楽の再生
// 	music.play();
// });

// pause.addEventListener("click", () => {
// 	// 音楽の一時停止
// 	music.pause();
// });

window.onload = function () {
	const spinner = document.getElementById('loading');
	spinner.classList.add('loaded');
}