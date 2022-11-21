import { useContext} from 'react'
import {LoginContext} from '../../../context/LoginContext'
import RoundBtn from '../../UI/RoundBtn/RoundBtn'
import cl from './BillboardMessage.module.sass'

const BillboardMessage = ({message, deleteFunc}) => {

	const auth = useContext(LoginContext)

	return (
		<div className={cl.BillboardMessage}>
			<div className={cl.Icon}>
				<svg className={cl.Svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
				  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
				</svg>
			</div>
			<div className={cl.Content}>
				<div className={cl.Header}>
					<div>
						{message.title}. {message.date}
					</div>
					{
						message.ownerId === auth.userId &&
							<div className={cl.CloseSvg_inner}>
								<RoundBtn onClick={() => deleteFunc(message._id)}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
										<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
					  					<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
									</svg>
								</RoundBtn>
							</div>
					}
				</div>
				<div> 
					{message.description}
				</div>
			</div>
		</div>
	)
}

export default BillboardMessage