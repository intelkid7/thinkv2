export const handleCheckout = async (body) => {
    const res = await fetch('/api/checkout', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const result = await res.json()
    // console.log(result);
    return result.session_url
}