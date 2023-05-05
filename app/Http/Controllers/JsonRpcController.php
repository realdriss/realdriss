<?php

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class JsonRpcController extends Controller
{
    public function handle(Request $request)
    {
        $client = new Client([
            'base_uri' => 'http://localhost:8000/rpc',
            'headers' => [
                'Content-Type' => 'application/json',
            ],
        ]);
        
        $response = $client->post('', [
            'json' => $request->all(),
        ]);
        
        return response()->json(json_decode($response->getBody(), true));
    }
}
