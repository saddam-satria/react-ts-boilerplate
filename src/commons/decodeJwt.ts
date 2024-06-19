import JwtClaim from "@/models/JwtClaim";

const decodeJwt = (jwt: string): JwtClaim => {
  const payloadBase64 = jwt.split(".")[1];
  const base64 = payloadBase64.replace(/-/g, "+").replace(/_/g, "/");
  const decodedJwt: JwtClaim = JSON.parse(window.atob(base64));

  return decodedJwt;
};

export default decodeJwt;
