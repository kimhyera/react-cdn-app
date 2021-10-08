const Nav = () => {
	return (
		<React.Fragment>
			<nav class="navbar navbar-expand navbar-light bg-light ">
				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="/">
							메인
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/post/post.html">
							게시물
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/login.html">
							로그인
						</a>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
};

ReactDOM.render(<Nav />, document.querySelector('#header'));
