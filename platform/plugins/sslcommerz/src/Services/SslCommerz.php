<?php

namespace Botble\SslCommerz\Services;

use Exception;
use Botble\SslCommerz\Library\SslCommerz\SslCommerzNotification;
use Illuminate\Support\Arr;
use GuzzleHttp\Client;

class SslCommerz extends SslCommerzNotification
{
    /**
     * Refund oreder
     * @return array
     * @throws Exception
     */
    public function refundOrder($paymentId, $amount, array $options = [])
    {

        $this->setApiUrl($this->config['apiDomain'] . $this->config['apiUrl']['refund_payment']);

        $requestData = [
            'bank_tran_id'   => $paymentId,
            'refund_amount'  => number_format($amount, 2, '.', ''),
            'refund_remarks' => Arr::get($options, 'refund_note', ''),
        ];

        $this->data = array_merge($this->data, $requestData);

        // Set the authentication information
        $this->setAuthenticationInfo();
        return $this->callApi();
    }

    /**
     * Get transaction details
     * @param int $transactionId
     * @return array
     * @throws Exception
     */
    public function getPaymentDetails($transactionId)
    {
        $header = [];

        $this->setApiUrl($this->config['apiDomain'] . $this->config['apiUrl']['refund_payment']);

        $this->data['tran_id'] = $transactionId;
        $this->data['format'] = 'json';

        // Set the authentication information
        $this->setAuthenticationInfo();
        return $this->callApi();
    }

    /**
     * Call API
     * @return array
     * @throws Exception
     */
    public function callApi()
    {
        $client = new Client();
        $response = $client->request('GET', $this->getApiUrl(), [
            'query' => $this->data
        ]);

        $data = json_decode($response->getBody(), true);
        $status = Arr::get($data, 'APIConnect');
        switch ($status) {
            case 'DONE':
                break;
            case 'INVALID_REQUEST':
                throw new Exception('Invalid data imputed to call the API, APIConnect: ' . $status);
                break;
            case 'FAILED':
                throw new Exception('API Authentication Failed, APIConnect: ' . $status);
                break;
            case 'INACTIVE':
                throw new Exception('API User/Store ID is Inactive, APIConnect: ' . $status);
                break;
            default:
                throw new Exception('Cannot get APIConnect');
                break;
        }

        return $data;
    }
}
