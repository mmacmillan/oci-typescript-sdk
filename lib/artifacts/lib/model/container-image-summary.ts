/**
 * Artifacts and Container Images API
 * API covering the Artifacts and [Registry](/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as generic artifacts and container images.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Container image summary.
 */
export interface ContainerImageSummary {
  /**
   * The compartment OCID to which the container image belongs. Inferred from the container repository.
   */
  "compartmentId": string;
  /**
   * The container image digest.
   */
  "digest": string;
  /**
    * The repository name and the most recent version associated with the image.
* If there are no versions associated with the image, then last known version and digest are used instead.
* If the last known version is unavailable, then 'unknown' is used instead of the version.
* <p>
Example: `ubuntu:latest` or `ubuntu:latest@sha256:45b23dee08af5e43a7fea6c4cf9c25ccf269ee113168c19722f87876677c5cb2`
* 
    */
  "displayName": string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the container image.
* <p>
Example: `ocid1.containerimage.oc1..exampleuniqueID`
* 
    */
  "id": string;
  /**
   * The current state of the container image.
   */
  "lifecycleState": string;
  /**
   * The OCID of the container repository.
   */
  "repositoryId": string;
  /**
   * The container repository name.
   */
  "repositoryName": string;
  /**
   * An RFC 3339 timestamp indicating when the image was created.
   */
  "timeCreated": Date;
  /**
   * The most recent version associated with this image.
   */
  "version"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * The system tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags": { [key: string]: { [key: string]: any } };
}

export namespace ContainerImageSummary {
  export function getJsonObj(obj: ContainerImageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerImageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
