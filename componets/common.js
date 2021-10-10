export   class GlobalState {
	constructor(isLoggedin, user) {
		//상태변수
		this.isLoggedin = isLoggedin; //로그인 되었는지 
		this.user = user; //로그인한 사용자 
	

		this.lodding = false;
		this.mainPosts = []; //메인화면에 포스트 할내용 
	}

	start() {
		this.started = true;
		this.initGame();
		this.showStopButton();
		this.showTimerAndScore();
		this.startGameTimer();

		sound.playBackground();
	}

	stop(reason) {
		this.started = false;
		this.stopGameTimer();
		this.hideGameButton();
		sound.playStopBackground();
	
	
		this.onGameStop && this.onGameStop(reason);
	}

	onItemClick = (item) => {

	};

	showStopButton() {
		
	}
	hideGameButton() {
	}


}



export class AuthService {
	login(providerName) {
        console.log('로그인이 완료 되면 로그인 키값을 받기 ' + providerName );
	}

	logout() {
		console.log('logout');
	}

	onAuthChange(onUserChanged) {
		firebaseAuth.onAuthStateChanged((user) => {
			onUserChanged(user);
		});
	}
}