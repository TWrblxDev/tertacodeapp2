// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Query, Relation} from '@nozbe/watermelondb';
import {lazy} from '@nozbe/watermelondb/decorators';
import Model, {Associations} from '@nozbe/watermelondb/Model';
import {Observable} from 'rxjs';

/**
 * A Category groups together channels for a user in a team.
 */
export default class CategoryModel extends Model {
    /** table (name) : Category */
    static table: string;

    /** associations : Describes every relationship to this table. */
    static associations: Associations;

    /** display_name : The display name for the category */
    displayName: string;

    /** type : The type of category */
    type: string;

    /** sort_order : The sort order for this category */
    sortOrder: number;

    /** sorting : One of manual, alphabetical, or recent.  */
    sorting: CategorySorting;

    /** muted : If the category is muted */
    muted: boolean;

    /** collapsed : If the category is collapsed (visible channels) */
    collapsed: boolean;

    /** team_id : The team in which this category resides */
    teamId: string;

    /** team : The team in which this category resides */
    team: Relation<TeamModel>;

    /** categoryChannels : The join table for channels */
    categoryChannels: Query<CategoryChannelModel>;

    /** categoryChannelsBySortOrder : The sorted join table for channels */
    @lazy categoryChannelsBySortOrder: Query<CategoryChannelModel>;

    /** channels : All the channels associated with this category */
    @lazy channels: Query<ChannelModel>;

    /** myChannels : All the myChannels associated with this category */
    @lazy myChannels: Query<MyChannelModel>;

    /** hasChannels : Whether the category has any channels */
    @lazy hasChannels: Observable<boolean>;
}