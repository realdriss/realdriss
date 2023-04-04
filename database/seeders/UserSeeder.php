<?php

namespace Database\Seeders;

use Botble\ACL\Models\User;
use Botble\ACL\Repositories\Interfaces\ActivationInterface;
use Botble\Base\Supports\BaseSeeder;
use Illuminate\Support\Facades\Schema;

class UserSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();

        User::truncate();

        $user = new User;
        $user->first_name = 'Godwin';
        $user->last_name = 'Waswa';
        $user->email = 'godwin@realdriss.com';
        $user->username = 'godwin';
        $user->password = bcrypt('godwin@18');
        $user->super_user = 1;
        $user->manage_supers = 1;
        $user->save();

        event('acl.activating', $user);

        $activationRepository = app(ActivationInterface::class);

        $activation = $activationRepository->createUser($user);

        event('acl.activated', [$user, $activation]);

        return $activationRepository->complete($user, $activation->code);
    }
}
