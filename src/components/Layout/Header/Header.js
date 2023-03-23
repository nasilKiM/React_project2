import styled from 'styled-components';

function BasicHeader() {
	return (
		<>
			<S.Container>
				<h1>MOVIE MOVIE</h1>
				<S.Nav>
					<a>홈</a>
					<a>상영작 순위</a>
					<a>현재 상영작</a>
					<a>상영 예정작</a>
					<a>Youngseung Jang</a>
				</S.Nav>
			</S.Container>
		</>
	);
}

export default BasicHeader;

const Container = styled.div`
	background-color: #ffffff;
	color: #000000;
	font-weight: bolder;
	padding: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 600px) {
		flex-direction: column;
		align-items: flex-start;
	}
	& > h1 {
		font-size: 24px;
		margin: 0;
		@media (max-width: 600px) {
			font-size: 20px;
			margin-bottom: 10px;
		}
	}
`;
const Nav = styled.div`
	display: flex;
	@media (max-width: 600px) {
		margin-top: 10px;
	}
	& > a {
		color: darkblue;
		text-decoration: none;
		margin-left: 20px;
		@media (max-width: 600px) {
			margin-left: 0;
		}
	}
`;

const S = {
	Container,
	Nav,
};
