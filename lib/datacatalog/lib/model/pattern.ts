/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Pattern representation. A Pattern is defined using an expression and can be used as data selectors or filters
 * to provide a singular view of an entity across multiple physical data artifacts.
 *
 */
export interface Pattern {
  /**
   * Unique pattern key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the pattern.
   */
  "description"?: string;
  /**
   * The data catalog's OCID.
   */
  "catalogId"?: string;
  /**
   * The current state of the data asset.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The date and time the pattern was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The last time that any change was made to the pattern. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  /**
   * OCID of the user who created the pattern.
   */
  "createdById"?: string;
  /**
   * OCID of the user who last modified the pattern.
   */
  "updatedById"?: string;
  /**
   * The expression used in the pattern that may include qualifiers. Refer to the user documentation for details of the format and examples.
   *
   */
  "expression"?: string;
  /**
   * List of file paths against which the expression can be tried, as a check. This documents, for reference
   * purposes, some example objects a pattern is meant to work with. If isEnableCheckFailureLimit is set to true,
   * this will be run as a validation during the request, such that if the check fails the request fails. If
   * isEnableCheckFailureLimit instead is set to (the default) false, a pattern will still be created or updated even
   * if the check fails, with a lifecycleState of FAILED.
   *
   */
  "checkFilePathList"?: Array<string>;
  /**
   * Indicates whether the expression check, against the checkFilePathList, will fail the request if the count of
   * UNMATCHED files is above the checkFailureLimit.
   *
   */
  "isEnableCheckFailureLimit"?: boolean;
  /**
   * The maximum number of UNMATCHED files, in checkFilePathList, above which the check fails. Optional, if
   * checkFilePathList is provided - but if isEnableCheckFailureLimit is set to true it is required.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "checkFailureLimit"?: number;
  /**
   * A map of maps that contains the properties which are specific to the pattern type. Each pattern type
   * definition defines it's set of required and optional properties.
   * Example: `{\"properties\": { \"default\": { \"tbd\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace Pattern {
  export function getJsonObj(obj: Pattern): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
