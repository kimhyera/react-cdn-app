const PostView = () => {
	const [inputs, setInputs] = React.useState([]);
	//기본 데이터
	const fetchInitialData = async (id) => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		return response.json();
	};

	const location = window.location.href;
	const hrefId = location.split('?id=')[1];

	React.useEffect(() => {
		fetchInitialData(hrefId).then((response) => {
			setInputs(response);
		});
	}, []);

	console.log('asdf', inputs.title);

	const onDelect = (id) => {
		//데이터 처리하는 로직
		alert(`${id}번 아이템이 삭제되었습니다.`);
		window.location.replace('/post/post.html');
	};

	const onChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: [e.target.value],
		});
	};

	const onUpdate = async (id) => {
		var item = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				title: inputs.title,
				body: inputs.body,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json.title);

				//ui 수정
			});
	};

	return (
		<React.Fragment>
			<h2 class="heading-lg">Post View</h2>

			<div>
				<div class="form-group" data-id={inputs.id}>
					<h3 class="post-title">
						<input
							type="text"
							name="title"
							value={inputs.title}
							onChange={onChange}
							class="form-control"
						/>
					</h3>
				</div>
				<div class="post-body">
					<textarea
						class="form-control"
						name="body"
						cols="30"
						rows="10"
						value={inputs.body}
						onChange={onChange}
					></textarea>
				</div>

				<div class="post-bottom">
					<button
						class="btn btn-secondary mr-2"
						onClick={() => {
							onDelect(inputs.id);
						}}
					>
						삭제
					</button>

					<a
						href="/post/post.html"
						type="submit"
						class="btn btn-secondary mr-2"
					>
						목록
					</a>

					<button
						class="btn btn-primary mr-2"
						onClick={() => {
							onUpdate(inputs.id);
						}}
					>
						수정완료
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

ReactDOM.render(<PostView />, document.querySelector('#contents'));
