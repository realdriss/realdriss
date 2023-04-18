<?php

namespace RealDriss\ACL\Events;

use RealDriss\ACL\Models\Role;
use RealDriss\Base\Events\Event;
use Illuminate\Queue\SerializesModels;

class RoleUpdateEvent extends Event
{
    use SerializesModels;

    /**
     * @var Role
     */
    public $role;

    /**
     * RoleUpdateEvent constructor.
     *
     * @param Role $role
     */
    public function __construct(Role $role)
    {
        $this->role = $role;
    }
}
