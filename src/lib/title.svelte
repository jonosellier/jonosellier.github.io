<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	const height = 72;

	let canvas!: HTMLCanvasElement;
	let context!: CanvasRenderingContext2D;

	$: x = 0;
	$: y = height / 2;

	let imgShadow: HTMLImageElement;
	let imgWithShadow: HTMLImageElement;

	let imgDataShadows: string;
	let imageDataWithShadow: string;

	let color = ['red', 'blue'];

	let nextGlitch = -1;

	export let text: string;

	onMount(() => {
		if (browser) {
			window.addEventListener('resize', initGlitchEffect);
			const style = getComputedStyle(document.body);
			color = [style.getPropertyValue('--prim-1'), style.getPropertyValue('--prim-2')];
			context = canvas.getContext('2d') as any;
			context.imageSmoothingQuality = 'high';
			imgShadow = new Image();
			imgWithShadow = new Image();
			initGlitchEffect();
		}
	});

	function initGlitchEffect() {
		clearTimeout(nextGlitch);
		const { width, height } = canvas.getBoundingClientRect();
		canvas.width = width;
		canvas.height = height;
		getShadowsImg();
		context.clearRect(0, 0, canvas.width, canvas.height);
		drawText();
		recursiveGlitch();
	}

	onDestroy(() => {
		clearTimeout(nextGlitch);
		if (browser) {
			window.removeEventListener('resize', initGlitchEffect);
		}
	});

	function recursiveGlitch() {
		nextGlitch = setTimeout(
			() => {
				glitch();
				recursiveGlitch();
			},
			Math.random() * 4900 + 100
		);
	}

	function glitch() {
		imgShadow.onload = function () {
			context.clearRect(0, 0, canvas.width, canvas.height);
			const arr = lineShadowsHeight();
			let sy = 0;
			for (let i = 0; i < arr.length; i++) {
				context.drawImage(
					imgShadow,
					0,
					sy,
					canvas.width,
					arr[i],
					getRandomInt(-2 * glitchOffset(), 2 * glitchOffset()),
					sy,
					canvas.width,
					arr[i]
				);
				sy = sy + arr[i];
			}
			drawText();
			imageDataWithShadow = canvas.toDataURL('image/png', 1.0);

			imgWithShadow.onload = () => {
				context.clearRect(0, 0, canvas.width, canvas.height);
				context.drawImage(
					imgWithShadow,
					0,
					0,
					canvas.width,
					canvas.height / 3 + 5,
					1,
					0,
					canvas.width,
					canvas.height / 3 + 5
				);
				context.drawImage(
					imgWithShadow,
					0,
					canvas.height / 3 + 5,
					canvas.width,
					canvas.height / 3 - 5,
					0,
					canvas.height / 3 + 5,
					canvas.width,
					canvas.height / 3 - 5
				);
				context.drawImage(
					imgWithShadow,
					0,
					(canvas.height / 3) * 2,
					canvas.width,
					canvas.height / 3,
					0,
					(canvas.height / 3) * 2,
					canvas.width,
					canvas.height / 3
				);
			};
			imgWithShadow.src = imageDataWithShadow;
		};
		imgShadow.src = imgDataShadows;

		setTimeout(() => {
			imgWithShadow.onload = function () {
				context.clearRect(0, (canvas.height / 3) * 2, canvas.width, canvas.height / 3);
				const arr = lineShadowsHeight();
				//console.log(arr);
				let sy = 0;
				for (let i = 0; i < arr.length; i++) {
					context.drawImage(
						imgWithShadow,
						0,
						sy,
						canvas.width,
						arr[i],
						getRandomInt(-2 * glitchOffset(), 2 * glitchOffset()),
						sy,
						canvas.width,
						arr[i]
					);
					sy = sy + arr[i];
				}

				//context.drawImage(imgWithShadow, 0, (canvas.height/3)*2, canvas.width, canvas.height/3, 2.5, (canvas.height/3)*2, canvas.width, canvas.height/3);
			};
			imgWithShadow.src = imageDataWithShadow;
		}, 80);

		setTimeout(function () {
			context.clearRect(0, 0, canvas.width, canvas.height);
			drawText();
		}, timeBack());
	}

	function drawText() {
		context.font = `bold ${height}px Roboto Mono`;
		context.fillStyle = '#FFFFFF';
		context.textAlign = 'start';
		context.textBaseline = 'middle';
		context.fillText(text.toLocaleUpperCase(), x, y);
	}

	function getRandomInt(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function generateGlitchLines() {
		return Math.floor(Math.random() * (7 - 4 + 1) + 4);
	}

	function glitchOffset() {
		return Math.floor(Math.random() * (3 - 2 + 1) + 2) * 0.8;
	}

	function timeBack() {
		const max = 300;
		const min = 80;
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function lineShadowsHeight() {
		let h = canvas.height;
		const count = generateGlitchLines();
		const arr = [];
		let s = 0;

		for (let i = 0; i < count; i++) {
			arr[i] = Math.floor(Math.random() * (h / (count - 1) - 2 + 1) + 2);
			h = h - arr[i];
			s = s + arr[i];
			arr[count] = canvas.height - s;
		}
		return arr;
	}

	function getShadowsImg() {
		context.save();
		context.font = 'bold 80px Roboto Condensed';
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.globalCompositeOperation = 'destination-over';
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = color[0];
		context.fillText(text, x - 2, y);
		context.fillStyle = color[1];
		context.fillText(text, x + 2, y);
		context.restore();

		imgDataShadows = canvas.toDataURL('image/png', 1.0);
	}
</script>

<div class="relative">
	<canvas bind:this={canvas} style={`height: ${height}px`}></canvas>
	<span
		class="text-slate-950/0 absolute top-0 font-bold"
		style={`font-size: ${height}px; line-height: ${height * 0.8}px`}
		>{text.toLocaleUpperCase()}</span
	>
</div>

<style>
	canvas {
		width: 100%;
	}
</style>
