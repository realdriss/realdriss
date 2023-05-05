<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class RpcTestController extends Controller
{
    public function test(Request $request)
    {
        $client = new Client();
        $response = $client->post('/rpc', [
            'json' => [
                'jsonrpc' => '2.0',
                'method' => 'add',
                'params' => [2, 3],
                'id' => 1,
            ],
        ]);
        
        $data = json_decode($response->getBody(), true);
        
        // handle the response
        // ...
    }
}
