<?php

namespace Tests\Feature;


use RealDriss\ACL\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ACLTest extends TestCase
{
    use RefreshDatabase;
    /**
     * Test if posting an empty submission to admin/login trigger an error.
     *
     * @return void
     */
    public function test_admin_login_with_empty_submission()
    {
        $response = $this->post(route('access.login.post'), []);
        $response->assertSessionHasErrors();
    }

    /**
     * Test if on logout the user is redirected to the login page
     * with a logout success message.
     */
    public function test_admin_logout_redirects_to_login()
    {
        $response = $this->post(route('access.login.post'), 
            [
                'username' => 'godwin@realdriss.com', 
                'password' => 'godwin@18',
            ]);
        $response = $this->get(route('access.logout'));
        $response->assertRedirect(route('access.login'));
    }

    /**
     * Test if a user is redirected back to the login page when 
     * they provide invalid login credentials
     */

    public function test_user_is_redirected_back_to_login_page_if_wrong_credentials_are_provided()
    {
        // Create a test user
        // $user = User::factory()->create([
        //     'email' => 'test@example.com',
        //     'password' => bcrypt('password123'),
        // ]);

        // Make a POST request to the login route with invalid credentials
        $response = $this->post("admin/login", [
            'email' => 'test@example.com',
            'password' => 'wrongpassword',
        ]);

        // Assert that the response redirects back to the login page
        $response->assertRedirect("admin/login");

        // Assert that the session contains an error message
        $this->assertArrayHasKey('error', session('flash_notification')->toArray());
    }
}

