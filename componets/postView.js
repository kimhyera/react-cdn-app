const PostView = () => {
	const [posts, setPosts] = React.useState([]);

	//기본 데이터
	const fetchInitialData = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		return response.json();
	};

	React.useEffect(() => {
		fetchInitialData().then((response) => {
			setPosts(response);
		});
	}, []);

	const onDelect = (id) => {
		//데이터 처리하는 로직
		alert('삭제되었습니다.');
		window.location.replace('/post/post.html');
	};

	return (
		<React.Fragment>
			<h2 class="heading-lg">Post View</h2>
			{posts.map((item) => {
				const href = `/post/view.html?id=${item.id}`;

				const updateHref = `/post/update.html?id=${item.id}`;
				var location = window.location.href;
				const hrefId = location.split('?id=')[1];

				if (item.id == hrefId) {
					return (
						<div>
							<div class="form-group" data-id={item.id}>
								<h3 class="post-title"> {item.title}</h3>
							</div>
							<div class="post-body">{item.body}</div>

							<div class="post-bottom">
								<a href={updateHref} type="submit" class="btn btn-primary mr-2">
									수정
								</a>
								<button
									onClick={() => {
										onDelect(item.id);
									}}
									class="btn btn-primary mr-2"
								>
									삭제
								</button>
								<a href="/post/post.html" type="submit" class="btn btn-primary">
									목록
								</a>
							</div>
						</div>
					);
				}
			})}
		</React.Fragment>
	);
};

ReactDOM.render(<PostView />, document.querySelector('#contents'));
