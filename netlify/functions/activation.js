export async function handler(event){
  const { email, monto } = JSON.parse(event.body)
  let plan='', dias=0, creditos=0
  if(monto==3490){ plan='argentina'; dias=30; creditos=15 }
  else if(monto==2.7){ plan='standard'; dias=35; creditos=15 }
  else if(monto==9.9){ plan='gold'; dias=45; creditos=50 }
  else if(monto==29.9){ plan='luxury'; dias=45; creditos=200 }
  return {statusCode:200, body: JSON.stringify({plan, creditos, dias})}
}
