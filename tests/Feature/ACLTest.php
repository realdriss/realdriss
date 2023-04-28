<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Facades\RealDriss\Base\Helpers\BaseHelper;

class ACLTest extends TestCase
{
    /**
     * The admin/post route requires email && password
     * we're posting an empty submission to trigger an error.
     *
     * @return void
     */
    public function test_admin_login_with_empty_submission()
    {
        $response = $this->post(BaseHelper::getAdminPrefix().'/login', []);
        $response->assertSessionHasErrors();
    }
}
