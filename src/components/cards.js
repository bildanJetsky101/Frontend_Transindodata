import img1 from '../assets/the-air-filter-company.svg'

export default function Cards({item}){

    console.log(img1)
    const array = [...item.languages]
    const array2 = [...item.tools]

    const languages = () =>{
        if(array.length > 1){
            for(let i = 0; i<array.length; i++){
                return(
                    <div style={styles.categories}>
                        <p><b>{array}</b></p>
                    </div>
                )
            }
        }
            return null
    }
    const tools = () =>{
        if(array2.length > 1){
            for(let i = 0; i<array.length; i++){
                return(
                    <div style={styles.categories}>
                        <p><b>{array2}</b></p>
                    </div>
                )
            }
        }
            return null
    }


    return(
        <div style={styles.cardsParent}>
            <div style={styles.jobInfoParent}>
                <div style={styles.jobInfoImageWrapper}>
                    <img style={styles.jobInfoImage} src={process.env.PUBLIC_URL+'assets/'+item.logo} alt="" />
                </div>
                <div style={styles.jobInfo}>
                    <div style={styles.jobInfoHeader}>
                        <p style={{ color:'hsl(180, 29%, 50%)'}}>{item.company}</p>
                        <p style={styles.jobInfoStatus}>{item.new?<span>New</span>: null }</p>
                    </div>
                    <h2 style={styles.jobTitle}>{item.position}</h2>
                    <div styles={styles.jobInfoFooter}>
                        <ul style={styles.jobInfoFooterList}>
                            <li style={styles.jobInfoFooterListInfo} >{item.postedAt}</li>
                            <li style={styles.jobInfoFooterListInfo}>{item.contract}</li>
                            <li style={styles.jobInfoFooterListInfo}>{item.location}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={styles.jobCategories}>
                <div style={styles.categories}>
                    <p><b>{item.role}</b></p>
                </div>
                <div style={styles.categories}>
                    <p><b>{item.level}</b></p>
                </div>
                    {languages()}
                    {tools()}
            </div>
        </div>
    )
    
}

const styles = {
    cardsParent:{
        boxShadow:'0px 8px 18px 0px rgba(77,77,77,0.27)',
        display:'flex',
        flexDirection:'row',
        paddingBottom:'25px',
        width:'90%',
        flexWrap:'wrap',
        backgroundColor:"white",
        borderRadius:'5px',
        padding:'20px',
        justifyContent:'space-between',
        marginTop:"20px"
    },
    jobInfoParent:{
        display:'flex',
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:"center"
    },
    jobInfo:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        paddingLeft:'17px',
        height:'100px',
        lineHeight:"2px"
    },
    jobInfoImageWrapper:{
        width:"110px",
        height:'110px'
    },
    jobInfoImage:{
        borderRadius:'50%',
        width:'100%',
        height:'100%'
    },
    jobInfoHeader:{
        display:'flex',
        displayDirection:'row',
       
    },
    jobInfoFooter:{
        display:'flex',
        displayDirection:'row',
        justifyContent:'flex-start'
    },
    jobInfoFooterList:{
        display:'flex',
        displayDirection:'row',
        listStyle:'none',
        paddingLeft:'0px',
        justifyContent:'space-between',
        color:'hsl(180, 8%, 52%)',
        maxWidth:'270px'
    },
    jobInfoFooterListInfo:{
        marginRight:'15px'
    },
    jobCategories:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'fit-content',
    },
    categories:{
        width:"fit-content",
        padding:"5px",
        height:'23px',
        color:'hsl(180, 29%, 50%)',
        borderRadius:'6px',
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'hsl(180, 52%, 96%)',
        marginLeft:'10px',
        cursor:'pointer'
    },
    jobInfoStatus:{
        marginLeft:'10px'
    }
}