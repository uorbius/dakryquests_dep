import cl from './Nickname.module.sass'

const Nickname = ({ user }) => {
	return(
		<>
			<div className={cl.NicknameInner}>
				<span className={cl.Nickname}>
					{user.nickname}
				</span>
				{
					user.user_status === 'admin' && 
					<svg className={`${cl.Svg} ${cl.Admin}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
					</svg>
				}
				{
					user.user_status === 'employee' && 
					<svg className={`${cl.Svg} ${cl.Employee}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  						<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
					</svg>
				}
				{
					user.user_status === 'participant' && 
					<svg className={`${cl.Svg} ${cl.Part}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
					  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
					</svg>
				}
			</div>
		</>
	)
}

export default Nickname