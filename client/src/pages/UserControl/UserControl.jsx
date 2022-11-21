import { useState, useEffect, useContext, useCallback } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { LoginContext } from '../../context/LoginContext'
import UserControlList from '../../components/UserControl/UserControlList'
import PageTitle from '../../components/UI/PageTitle/PageTitle'
import cl from './UserControl.module.sass'
import ufo from '../../images/ufo.png'

const UserControl = () => {

	const [users, setUsers] = useState([])

	const auth = useContext(LoginContext)

	const {request} = useHttp()

	const fetchUsers = useCallback( async () => {
		try{
			const response = await request('/api/auth/get-participants', 'GET', null, {
				Authorization: `Bearer ${auth.token}`
			})
			
			setUsers(response)
		} catch(e) {
			console.log(e)
		}
	}, [auth.token, request])

	useEffect(() => {
		fetchUsers()
	}, [fetchUsers])

	return (
		<>
			{
				users.length 
					?
					<>
						<PageTitle>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
								<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
							</svg>
						</PageTitle>
						<div className={cl.UserControl}>
							<UserControlList users={users}/>
						</div>	
					</>
					:
					<div style={{
							height: "100vh",
						 	display: "grid",
						 	alignItems: "center",
						 	justifyContent: "center"
							}}
						>
							<div style={{
								textAlign: "center",
								color: "#fff"
								}}
							>
								<img src={ufo} alt=""/>
								<p>
									Еще нет пользователей...
								</p>
							</div>
					</div>	
			}
		</>
	)
}

export default UserControl