<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JsonRpcController extends Controller
{
    public function handle(Request $request)
    {
        $requestData = json_decode($request->getContent(), true);

        $method = $requestData['method'];
        $params = $requestData['params'];
        $id = $requestData['id'];

        switch ($method) {
            case 'add':
                $result = array_sum($params);
                $response = [
                    'jsonrpc' => '2.0',
                    'result' => $result,
                    'id' => $id,
                ];
                return response()->json($response);
            default:
                $error = [
                    'jsonrpc' => '2.0',
                    'error' => [
                        'code' => -32601,
                        'message' => 'Method not found',
                    ],
                    'id' => $id,
                ];
                return response()->json($error);
        }
    }
}
