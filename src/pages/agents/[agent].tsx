import React from 'react'
import { useRouter } from "next/router";


function ViewAgent() {
  const router = useRouter()
  const agentName = router.query.agent;
  
  return (
    <div>
      Agent
    </div>
  )
}

export default ViewAgent
