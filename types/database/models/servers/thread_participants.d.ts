// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Relation} from '@nozbe/watermelondb';
import Model, {Associations} from '@nozbe/watermelondb/Model';

/**
 * The Thread Participants Model is used to show the participants of a thread
 */
export default class ThreadParticipantsModel extends Model {
    /** table (name) : ThreadParticipants */
    static table: string;

    /** associations : Describes every relationship to this table. */
    static associations: Associations;

    /** thread_id : The related Thread's foreign key to which this participant belongs */
    threadId: string;

    /** user_id : The related User's foreign key by which this reaction was expressed */
    userId: string;

    /** user : The related record to the User model */
    user: Relation<UserModel>;
}
