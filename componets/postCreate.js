const PostCreate = () => {
	const [inputs, setInputs] = React.useState([]);

	//기본 데이터

	const onCreate = () => {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				id: 10,
				title: inputs.title,
				body: inputs.body,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => {
				//응답을 json 형태로 파싱한다
				return response.json();
			})
			.then((datas) => {
				console.log(datas);
			})

			.catch((error) => console.log('error', error));
	};

	const onChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: [e.target.value],
		});
	};

	return (
		<React.Fragment>
			<h2 class="heading-lg">Post View</h2>

			<div>
				<div class="form-group">
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
					<a
						href="/post/post.html"
						type="submit"
						class="btn btn-secondary mr-2"
					>
						목록
					</a>

					<button class="btn btn-primary mr-2" onClick={onCreate}>
						저장
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

ReactDOM.render(<PostCreate />, document.querySelector('#contents'));
