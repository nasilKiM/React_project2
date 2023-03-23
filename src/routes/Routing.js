import Layout from 'components/Layout/Layout';
import MovieDetailPage from 'pages/DetailPage';
import HomePage from 'pages/HomePage';
import NowPlaying from 'pages/NowPlaying';
import SearchResult from 'pages/SearchResult';
import TopRated from 'pages/TopRated';
import UpComing from 'pages/UpComing';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{
				path: '/movie/',
				element: <SearchResult />,
			},
			{
				path: '/movie/:movie_id',
				element: <MovieDetailPage />,
			},
			{
				path: '/movie/:now_playing',
				element: <NowPlaying />,
			},
			{
				path: '/movie/:upcoming',
				element: <UpComing />,
			},
			{
				path: '/movie/:top_rated',
				element: <TopRated />,
			},
		],
	},
]);

export default router;
