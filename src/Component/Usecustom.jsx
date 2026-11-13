import { useEffect, useState } from "react"

const Usecustom = (url) => {

    const [data,chdata] = useState(null);
    const [load,chload] = useState(true);
    const [err,cherr] = useState(null);

    useEffect(() => {
           fetch(url).then((rep) => {
              if(!rep.ok){
                  throw new Error("Failed to Fetch Data")
              }
              return rep.json()
           }).then((rep) => {
                chdata(rep)
                chload(false)
           }).catch((e) => {
                cherr(e.message)
                chload(false)
           })

    },[url])

     return {data,load,err}

}

export default Usecustom