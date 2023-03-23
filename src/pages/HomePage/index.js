/*
    - 한번 당 가져올 데이터 최대 20
    - 제목, 포스터, 미리보기(소개), 별점 표시
    - 포스터 없는 경우, 대체 이미지 사용
*/

import { useEffect, useState } from 'react';

function HomePage() {
	const [movies, setMovies] = useState([]);

	const getMovies = () => {
		axios
			.get(
				'https://api.themoviedb.org/3/movie/popular?api_key=REACT_APP_API_KEY',
			)
			.then(res => {
				console.log(res);
				setMovies(res.data.data.movies);
			});
	};

	useEffect(() => {
		getMovies();
	}, []);

	console.log(movies);
	console.log(getMovies);

	return (
		<div>
			<div>{movies}</div>
		</div>
	);
}

export default HomePage;
