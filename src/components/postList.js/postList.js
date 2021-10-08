import React, { memo, useState, useCallback, useEffect } from 'react';

const PostList = () => {
	const [posts, setPosts] = useState([]);

	//기본 데이터
	const fetchInitialData = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		return response.json();
	};

	useEffect(() => {
		fetchInitialData().then((response) => {
			setPosts(response);
		});
	}, []);

	const onDelect = useCallback((id) => {
		const item = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'DELETE',
		});

		console.log(item);
		//ui 삭제
		const resultArray = posts.filter((item) => item.id !== id);
		setPosts(resultArray);
	});

	return (
		<React.Fragment>
			<h2 class="heading-lg">Post</h2>
			<div className="text-right mb-4">
				<a href="create.html" class="btn btn-primary ">
					글쓰기
				</a>
			</div>
			<ul class="posts-list pt-2 con-scroll">
				{posts.map((item) => {
					const href = `/post/view.html?id=${item.id}`;
					const editHref = `/post/update.html?id=${item.id}`;
					return (
						<li key={item.id} class="d-flex">
							<span class="col-1" data-id={item.id}>
								{item.id}
							</span>
							<input type="hidden" id="userId" value={item.userId} />
							<span class="posts-title col text-truncate">
								<a href={href}>{item.title}</a>
							</span>
							<span class="posts-body col-auto ">
								<a
									href={editHref}
									class="btn-primary mr-2 btn btn-xs text-white"
								>
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
							</span>
						</li>
					);
				})}
			</ul>
		</React.Fragment>
	);
};

export default React.memo(PostList);
