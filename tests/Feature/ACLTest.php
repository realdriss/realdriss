<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ACLTest extends TestCase
{
    /**
     * Test if posting an empty submission to admin/login trigger an error.
     *
     * @return void
     */
    public function test_admin_login_with_empty_submission()
    {
        $response = $this->post(route('access.login'), []);
        $response->assertSessionHasErrors();
    }


    /**
     * Test if on logout the user is redirected to the login page
     * with a logout success message.
     */
    public function test_admin_logout_redirects_to_login()
    {
        $response = $this->post(route('access.login'), 
            [
                'username' => 'godwin@realdriss.com', 
                'password' => 'godwin@18',
            ]);
        $response = $this->get(route('access.logout'));
        $response->assertRedirect(route('access.login'));
    }
}
