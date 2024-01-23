<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\MyEvent;
use Illuminate\Support\Facades\Event;


class SendNotificationController extends Controller
{
    public function test()
    {
        $message = 'Hello, this is a real-time notification!';
        event(new MyEvent($message));
        return 'Notification sent!';
    }
    public function store(Request $request)
    {
        $message = 'Hello, this is a real-time notification!';
        event(new MyEvent($message));
        
        return response()->json('Notification sent!');
    }
}
