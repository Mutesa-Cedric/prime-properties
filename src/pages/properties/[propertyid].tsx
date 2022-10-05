import React from 'react'
import { useRouter } from 'next/router'


function Property() {
  const router = useRouter();
  const { propertyid } = router.query;
  return (
    <div>
      property with id {propertyid}
    </div>
  )
}

export default Property
