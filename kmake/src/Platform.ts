export interface PlatformType {
	Windows: string;
	WindowsApp: string;
	iOS: string;
	OSX: string;
	Android: string;
	Linux: string;
	Emscripten: string;
	Pi: string;
	tvOS: string;
	PS4: string;
	XboxOne: string;
	Switch: string;
	Switch2: string;
	XboxSeries: string;
	PS5: string;
	FreeBSD: string;
	Wasm: string;
	Kompjuta: string;
}

export let Platform: PlatformType = {
	Windows: 'windows',
	WindowsApp: 'windowsapp',
	iOS: 'ios',
	OSX: 'osx',
	Android: 'android',
	Linux: 'linux',
	Emscripten: 'emscripten',
	Pi: 'pi',
	tvOS: 'tvos',
	PS4: 'ps4',
	XboxOne: 'xboxone',
	Switch: 'switch',
	Switch2: 'switch2',
	XboxSeries: 'xboxseries',
	PS5: 'ps5',
	FreeBSD: 'freebsd',
	Wasm: 'wasm',
	Kompjuta: 'kompjuta',
};
