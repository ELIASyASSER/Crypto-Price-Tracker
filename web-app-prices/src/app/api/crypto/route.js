export async function GET() {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,solana,dogecoin&vs_currencies=usd"
      );
      const data = await response.json();
      return Response.json(data);
    } catch (error) {
      return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
        status: 500,
      });
    }
  }
  